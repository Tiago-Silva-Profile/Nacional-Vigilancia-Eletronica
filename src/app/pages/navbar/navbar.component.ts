import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const navbar = document.getElementById('navbar'); // Obtém o elemento da navbar

    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          this.renderer.addClass(navbar, 'scrolled');
        } else {
          this.renderer.removeClass(navbar, 'scrolled');
        }
      });
    }
  }

}
