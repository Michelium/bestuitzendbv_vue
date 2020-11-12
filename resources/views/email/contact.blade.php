<h3>Inzending contactformulier Best Uitzend B.V. website!</h3><br>

Er is zojuist een inzending gedaan via het contactformulier op de website! <br><br>

<h5>Contactgegevens:</h5>
Naam: <b>{{ $details['name'] }}</b> <br>
@if ($details['company_name'])
Bedrijfsnaam: <b>{{ $details['company_name'] }}</b> <br>
@endif
Email: <b>{{ $details['email'] }}</b> <br>
@if ($details['phone'])
Telefoonnummer: <b>{{ $details['phone'] }}</b> <br>
@endif
<br>
@if ($details['function'] != 'Geen')
<b>Heeft gereageerd op de functie: {{ $details['function'] }}</b> <br><br><br>
@endif
Bericht: <br><br>

{{ $details['message'] }}
