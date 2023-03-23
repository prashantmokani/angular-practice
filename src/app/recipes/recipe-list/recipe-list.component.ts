import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('Chicken Tangdi Kebab', "Indian Dish from Ranveer Brar", "https://img.youtube.com/vi/WnpvlEDbDjk/sddefault.jpg"),
    new Recipe("Chicken Changezi", "Chicken Changezi by Ranveer Brar", "https://ranveerbrar.com/wp-content/uploads/2022/11/Chicken-changezi.jpg"),
    new Recipe("Chicken Tikka", "Chicken Tikka", "https://ranveerbrar.com/wp-content/uploads/2021/02/chicken-kebab-640x385.jpg")
  ];


}
