import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GaleriaWeb';
  images: any[] = [
    { id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
    { id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43 },
    { id: 2, alt: "Dalmatyńczyk", filename: "obraz3.jpg", category: 2, downloads: 2 },
    { id: 3, alt: "Świnka morska", filename: "obraz4.jpg", category: 2, downloads: 53 },
    { id: 4, alt: "Rotwailer", filename: "obraz5.jpg", category: 2, downloads: 43 },
    { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11 },
    { id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, downloads: 22 },
    { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33 },
    { id: 8, alt: "Świnka morska", filename: "obraz9.jpg", category: 2, downloads: 123 },
    { id: 9, alt: "Foksterier", filename: "obraz10.jpg", category: 2, downloads: 22 },
    { id: 10, alt: "Szczeniak", filename: "obraz11.jpg", category: 2, downloads: 12 },
    { id: 11, alt: "Garbus", filename: "obraz12.jpg", category: 3, downloads: 321 }
  ];

  filteredImages: any[] = [];
  categories = {
    Kwiaty: true,
    Zwierzeta: true,
    Samochody: true
  };
  selectedImage: any;
  isModalOpen = false;

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.images = this.images.map(image => {
      image.src = `assets/images/${image.filename}`;
      return image;
    });
    this.filterImages();
  }

  filterImages() {
    this.filteredImages = this.images.filter(image => {
      if (this.categories.Kwiaty && image.category === 1) return true;
      if (this.categories.Zwierzeta && image.category === 2) return true;
      if (this.categories.Samochody && image.category === 3) return true;
      return false;
    });
  }

  anyCategorySelected(): boolean {
    return this.categories.Kwiaty || this.categories.Zwierzeta || this.categories.Samochody;
  }

  downloadImage(image: any) {
    image.downloads++;
    console.log(`Downloading image: ${image.alt}`);
  }

  openModal(image: any) {
    this.selectedImage = image;
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }}