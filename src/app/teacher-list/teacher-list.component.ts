import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  listprof=[
    {mat:'Mathématique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Martin Alain',numtel:'0755887799',email:'Martin.alain@gmail.com'},
    {mat:'Mathématique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Bernard Alex',numtel:'0755887790',email:'Bernard.alban@hotmail.com'},
    {mat:'Mathématique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Thomas Alexis',numtel:'0755887798',email:'ThomasAlexis@hotmail.com'},
    {mat:'Mathématique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Petit Thibault',numtel:'0755889698',email:'Thibault024@hotmail.com'},
    {mat:'Mathématique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Robert Alexandre',numtel:'0755889688',email:'R.alexandre@gmail.com'},
    {mat:'Physique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Durand Anais',numtel:'0755887777',email:'Durand.anais@hotmail.com'},
    {mat:'Physique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Leroy Adrienne',numtel:'0755887740',email:'LeroyAdri@gmail.com'},
    {mat:'Physique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Roux Amandine',numtel:'0755887736',email:'Rouxamandine@hotmail.com'},
    {mat:'Physique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Morel Estelle',numtel:'0755257799',email:'Morelestelle@hotmail.com'},
    {mat:'Physique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Fournier François',numtel:'0755888699',email:'ffournier@hotmail.com'},
    {mat:'Sience',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Girard Fréderique',numtel:'0755887769',email:'gerardfred@hotmail.com'},
    {mat:'Sience',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Bonnet Bonnet',numtel:'0755887792',email:'GenneBonnet@hotmail.com'},
    {mat:'Sience',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Dupont Helene',numtel:'0755887701',email:'Duponthln@gmail.com'},
    {mat:'Sience',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Lambert Marc',numtel:'0755887705',email:'Lambert@gmail.com'},
    {mat:'Sience',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Fontaine Martin',numtel:'0750287799',email:'MartinF@gmail.com'},
    {mat:'Litérature',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Garnier Maxime',numtel:'0755888299',email:'Gmaxime@gmail.com'},
    {mat:'Litérature',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Boyer Laure',numtel:'0755887733',email:'Laureboyer@gmail.com'},
    {mat:'Litérature',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Legrand Lucie',numtel:'0755830799',email:'Legrandlucie@hotmail.com'},
    {mat:'Litérature',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Lafrontiére suzi',numtel:'0755887708',email:'Legrandlucie@hotmail.com'},
    {mat:'Litérature',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Garcia Marie',numtel:'0755887707',email:'mariegarcia@gmail.com'},
    {mat:'Informatique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Perrin Thibault',numtel:'0755889999',email:'Perrinthib@hotmail.com'},
    {mat:'Informatique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Biadane Pierre',numtel:'0755887704',email:'P.Biadane@gmail.com'},
    {mat:'Informatique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Belkacem Hamza',numtel:'0755889199',email:'Hamza.Belkacem@gmail.com'},
    {mat:'Informatique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Soltani Nasima',numtel:'0755887726',email:'N.soltani@gmail.com'},
    {mat:'Informatique',photo:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',name:'Soltani Aissa',numtel:'0750887726',email:'A.soltani@gmail.com'}
    ];
    mat = '';
    Searchmat = '';
    SortbyParam = '';
    SortDirection = 'asc';
 
 
  constructor() { }

  ngOnInit(): void {
  }
  onFiliFilter() {
   
    this.Searchmat = this.mat;}
    

  onFiliFilterClear() {
    this.Searchmat = '';
    this.mat = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
  
}
