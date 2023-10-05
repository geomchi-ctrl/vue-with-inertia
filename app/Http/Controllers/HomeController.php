<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home/Home');
    }

    public function about(){
        return Inertia::render('Home/About');
    }
}
