<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller {

    public function submit(Request $request) {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        Mail::to(config('mail.to'))->send(new ContactForm($request->all()));

        if (Mail::failures()) {
            return response()->json([
                'status'  => 500,
                'data'    => $request,
                'message' => 'Not sending mail.. retry again...'
            ]);
        }

        return response()->json(null, 200);
    }
}
