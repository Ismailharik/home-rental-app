import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {
  homeType=[];
  homeTypeDropdownOpen = false;

  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router,private route:ActivatedRoute
  ) { }

  ngOnInit() {  
    this.route.queryParams.subscribe(
      params=>{
        const homeTypeFilters = params['home-type']||[];
        this.dataService.loadHomes(homeTypeFilters);
        this.homeType=homeTypeFilters
      }
    )
  }

  homeTypeFilterApplied($event:Event) {

    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], { queryParams: { 'home-type': $event } });

  }

}
