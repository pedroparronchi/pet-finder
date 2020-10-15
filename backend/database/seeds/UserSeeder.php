<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pet_owners')->insert([
            'name' => 'Admin Teste',
            'email' => 'teste@teste.com',
            'phone' => '',
            'password' =>  Hash::make('123456'),
            'remember_token' => Str::random(10),
        ]);
    }
}
