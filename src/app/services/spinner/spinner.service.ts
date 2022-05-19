import { Injectable } from '@angular/core';
import { Spinner, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  animations = ['ball-clip-rotate-multiple', 'square-jelly-box', 'timer', 'square-loader',
  'line-scale-pulse-out-rapid', 'line-scale-pulse-out', 'line-scale-party', 'cube-transition', 'ball-zig-zag-deflect',
  'ball-zig-zag', 'ball-scale-ripple-multiple', 'ball-running-dots', 'ball-rotate', 'ball-pulse-sync',
  'ball-pulse', 'ball-newton-cradle', 'ball-fussion', 'ball-elastic-dots', 'ball-clip-rotate-pulse',
  'ball-clip-rotate-multiple', 'ball-climbing-dot',
  'ball-circus', 'ball-atom'];

// others = ['pacman'];

defaultConfig: Spinner = {};

constructor(private spinner: NgxSpinnerService) {
  const value =  Math.floor(Math.random() * this.animations.length);
  this.defaultConfig.type = this.animations[value];
}

showSpinner() {
  this.spinner.show(undefined, this.defaultConfig).then();
}

hideSpinner() {
  this.spinner.hide().then();
}
}
