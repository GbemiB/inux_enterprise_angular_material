import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  constructor() { }

  getSession(key: string) {

    var localStore : any = localStorage.getItem(key) == null ? null : localStorage.getItem(key);
    
    return JSON.parse(localStore);
  }

  setSession(key: string, data: any) {
    if (data == null)
    {
      localStorage.removeItem(key);
    }
    else
    {
      localStorage.setItem(key, JSON.stringify(data));
    }
    
  }

  removeItem(key:string) {
    localStorage.removeItem(key);
  }
}
