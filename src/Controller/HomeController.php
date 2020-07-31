<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/Ressources", name="ressources")
     */
    public function ressources()
    {
        return $this->render('ressources/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/About", name="about")
     */
    public function about()
    {
        return $this->render('about/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/notebook", name="notebook")
     */
    public function notebook()
    {
        return $this->render('notebook/notebook.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
