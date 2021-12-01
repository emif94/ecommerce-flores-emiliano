import React from 'react'

export const NavBar = () => {
    return (
        <div>
            
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Hero Collectibles</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Lego´s</a></li>
                                    <li><a class="dropdown-item" href="#">Figuras de Acción</a></li>
                                    <li><a class="dropdown-item" href="#">Estatuas</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>

                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="ej: Batman" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        
                        </div>
                    </div>
                </nav>
            </div>

            

        </div>
    )
}

