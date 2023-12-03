export let buttonScale:number;

export function calculateButtonScale() {
  switch (true) {
    case window.innerWidth > 1900:
      return parseFloat("" + (window.innerWidth) / 2500);
  
    case window.innerWidth >= 1300 && window.innerWidth < 1900:
      return parseFloat("" + (window.innerWidth) / 2000);
      
    case window.innerWidth >= 800 && window.innerWidth < 1300:
      return parseFloat("" + (window.innerWidth) / 2000);
      
    default:
      return parseFloat("" + (window.innerWidth) / 2500);
  }
}

export let recapchaScale:number;

export function calculateRecapchaScale() {
  switch (true) {
    case window.innerWidth > 1600:
      return 1;
  
    case window.innerWidth >= 1400 && window.innerWidth < 1600:
      return 0.9;

      case window.innerWidth >= 1200 && window.innerWidth < 1400:
      return 0.8;

      case window.innerWidth >= 992 && window.innerWidth < 1200:
      return 0.7;

      case window.innerWidth >= 768  && window.innerWidth < 992:
      return 0.6;

      case window.innerWidth >= 576   && window.innerWidth < 768:
      return 0.5;

      case window.innerWidth < 576:
      return 0.4;
            
    default:
      return parseFloat("" + (window.innerWidth) / 3000);
  }
}