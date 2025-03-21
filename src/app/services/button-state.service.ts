import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonStateService {

  private buttonStateEn = signal(false);
  private buttonStateDe = signal(false);

  getButtonState(lang: string) {
    if (lang === "en") {
      return this.buttonStateEn;
    }
    if (lang === "de") {
      return this.buttonStateDe;
    }
    return signal(false); // if lang != de || en set false
  }

  setButtonState(state: boolean, lang: string) {
    if (lang ==="en") {
      this.buttonStateEn.set(state);
    }
    if (lang === "de") {
      this.buttonStateDe.set(state);
    }
  }

}
