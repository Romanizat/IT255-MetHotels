import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferComponent} from "./offer/offer.component";
import {RecommendationComponent} from "./recommendation/recommendation.component";
import {AboutComponent} from "./about/about.component";
import {RoomsComponent} from "./rooms/rooms.component";


const routes: Routes = [
  // Routing je implementiran na projektu
  {path: "offers", component: OfferComponent},
  {path: "recommendations", component: RecommendationComponent},
  {path: "about", component: AboutComponent},
  {path: "rooms", component: RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
