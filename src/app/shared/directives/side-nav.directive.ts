import {AfterContentInit, AfterViewChecked, AfterViewInit, Directive, OnInit} from '@angular/core';

@Directive({
    selector: '[sideNav]'
})
export class SideNavDirective implements AfterViewChecked {
  constructor() { }

  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    const sideNavMenuItems = document.querySelectorAll('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a');
    sideNavMenuItems.forEach(menuItem => {
        menuItem.removeEventListener('click', handleMenuItemClick);
        menuItem.addEventListener('click', handleMenuItemClick);
    });
  }

}

// tslint:disable-next-line:typedef
function handleMenuItemClick(event) {
  const parent = this.parentNode;
  if (parent.classList.contains('ant-menu-submenu-open')) {
    const dropdownMenu = parent.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      // tslint:disable-next-line:only-arrow-functions typedef
      slideUp(dropdownMenu, 200, function() {
        parent.classList.remove('ant-menu-submenu-open');
      });
    }
  } else {
    const parentMenu = parent.parentNode;
    const openSubmenu = parentMenu.querySelector('li.ant-menu-submenu-open');
    if (openSubmenu) {
      const openDropdownMenu = openSubmenu.querySelector('.dropdown-menu');
      if (openDropdownMenu) {
        const height = openDropdownMenu.getAttribute('data-height');
        // tslint:disable-next-line:only-arrow-functions typedef
        slideUp(openDropdownMenu, 100, function() {
          openSubmenu.querySelector('a').classList.remove('ant-menu-submenu-open');
          openSubmenu.classList.remove('ant-menu-submenu-open');
        }, height);
      }
    }
    const dropdownMenu = parent.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      const height = dropdownMenu.getAttribute('data-height');
      // tslint:disable-next-line:only-arrow-functions typedef
      slideDown(dropdownMenu, 100, function() {
        parent.classList.add('ant-menu-submenu-open');
      }, height);
    }
  }
}


// tslint:disable-next-line:typedef
function slideUp(element, duration, callback = undefined, height = undefined) {
  if (!element) { return; }
  if (!height) {
      height = element.offsetHeight + 'px';
      element.setAttribute('data-height', height);
  }
  element.style.height = height;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = duration + 'ms';
  // tslint:disable-next-line:no-unused-expression
  element.offsetHeight; // Trigger a reflow
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  // tslint:disable-next-line:only-arrow-functions typedef
  window.setTimeout(function() {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      if (typeof callback === 'function') { callback(); }
  }, duration);
}
// tslint:disable-next-line:typedef
function slideDown(element, duration, callback = undefined, height = undefined) {
  if (!element) { return; }
  if (!height) {
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;
      if (display === 'none') { display = 'block'; }
      element.style.display = display;
      height = element.offsetHeight + 'px';
      element.setAttribute('data-height', height);
      element.style.display = 'none';
  }
  element.style.removeProperty('display');
  element.style.height = height;
  element.style.overflow = 'hidden';
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  // tslint:disable-next-line:no-unused-expression
  element.offsetHeight; // Trigger a reflow
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = duration + 'ms';
  element.style.height = height;
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  // tslint:disable-next-line:only-arrow-functions typedef
  window.setTimeout(function() {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      if (typeof callback === 'function') { callback(); }
  }, duration);
}
