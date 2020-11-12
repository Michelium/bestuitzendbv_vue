<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactForm extends Mailable {
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        $address = config('mail.from.address');
        $subject = 'Contactformulier website Best Uitzend B.V. inzending';
        $name = config('mail.from.name');

        return $this->view('email.contact')
            ->from($address, $name)
            ->subject($subject)
            ->with(['details' => $this->data]);
    }
}
