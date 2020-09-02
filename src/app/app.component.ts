import { Component } from "@angular/core";
import { FlopChooserService } from "./flop-chooser.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  flops;
  isCorrect = false;
  hasChosen = false;

  constructor(public flopChooser: FlopChooserService) {} // define access to service

  ngOnInit() {
    this.selectNewFlops();
  }

  selectNewFlops() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }
  onFirstSelected() {
    console.log("Clicked on First");
    if (!this.hasChosen) {
      this.hasChosen = true;

      this.isCorrect = this.flopChooser.isChoicesCorrect(
        this.flops.first,
        this.flops.second
      );
      console.log(this.isCorrect);
    }
  }

  onSecondSelected() {
    if (!this.hasChosen) {
      console.log("Clicked on Second");
      this.hasChosen = true;

      this.isCorrect = this.flopChooser.isChoicesCorrect(
        this.flops.second,
        this.flops.first
      );
      console.log(this.isCorrect);
    }
  }

  onPlayAgainClicked() {
    this.hasChosen = false;
    this.selectNewFlops();
  }
}
