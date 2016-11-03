import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
@Injectable()
export class SanitizeHTML {
  constructor(private _sanitizer: DomSanitizer) { }

  transform(value, args): any {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
