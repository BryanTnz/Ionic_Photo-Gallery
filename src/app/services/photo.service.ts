import { Injectable } from '@angular/core';

import {Camera,
  CameraResultType,
  CameraSource,
  Photo} from '@capacitor/camera';

import {Filesystem,
  Directory } from '@capacitor/filesystem';

import {Preferences } from '@capacitor/preferences';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor() { }
  // mod
  public photos: UserPhoto[] = [];



  public async addNewToGallery() {
    // take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    // Mod
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }
   
}

// mod
export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
