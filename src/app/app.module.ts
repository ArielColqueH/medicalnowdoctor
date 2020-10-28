import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import {
  StyleUtils,
  StylesheetMap,
  MediaMarshaller,
  ɵMatchMedia,
  BreakPointRegistry,
  PrintHook,
  LayoutStyleBuilder,
  FlexStyleBuilder,
  ShowHideStyleBuilder,
  FlexOrderStyleBuilder,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  DefaultFlexAlignDirective,
  DefaultLayoutAlignDirective,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  FlexFillDirective,
  FlexFillStyleBuilder,
} from "@angular/flex-layout";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [
    StyleUtils,
    StylesheetMap,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    PrintHook,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    ShowHideStyleBuilder,
    FlexOrderStyleBuilder,
    FlexAlignDirective,
    FlexAlignStyleBuilder,
    DefaultFlexAlignDirective,
    DefaultLayoutAlignDirective,
    LayoutAlignDirective,
    LayoutAlignStyleBuilder,
    FlexFillDirective,
    FlexFillStyleBuilder,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
