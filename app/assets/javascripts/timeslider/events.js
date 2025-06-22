function bindTimeSliderEvents(timeslider) {
  L.DomEvent.on(timeslider.controls.rangesubmit, "click", () => {
    timeslider.setRangeFromSelectors();
  });
  L.DomEvent.on(timeslider.controls.rangesubmit, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.rangeminyear, "change", () => {
    if (
      parseInt(timeslider.controls.rangeminyear.value) <
      parseInt(timeslider.controls.rangeminyear.min)
    )
      timeslider.controls.rangeminyear.value =
        timeslider.controls.rangeminyear.min;
    else if (
      parseInt(timeslider.controls.rangeminyear.value) >
      parseInt(timeslider.controls.rangeminyear.max)
    )
      timeslider.controls.rangeminyear.value =
        timeslider.controls.rangeminyear.max;

    timeslider.adjustDateRangeInputsForSelectedMonthAndYear();
    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangeminmonth, "input", () => {
    timeslider.adjustDateRangeInputsForSelectedMonthAndYear();
    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangeminday, "change", () => {
    if (
      parseInt(timeslider.controls.rangeminday.value) <
      parseInt(timeslider.controls.rangeminday.min)
    )
      timeslider.controls.rangeminday.value =
        timeslider.controls.rangeminday.min;
    else if (
      parseInt(timeslider.controls.rangeminday.value) >
      parseInt(timeslider.controls.rangeminday.max)
    )
      timeslider.controls.rangeminday.value =
        timeslider.controls.rangeminday.max;

    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangemincebce, "change", () => {
    timeslider.adjustDateRangeInputsForSelectedMonthAndYear();
    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangemaxyear, "change", () => {
    if (
      parseInt(timeslider.controls.rangemaxyear.value) <
      parseInt(timeslider.controls.rangemaxyear.min)
    )
      timeslider.controls.rangemaxyear.value =
        timeslider.controls.rangemaxyear.min;
    else if (
      parseInt(timeslider.controls.rangemaxyear.value) >
      parseInt(timeslider.controls.rangemaxyear.max)
    )
      timeslider.controls.rangemaxyear.value =
        timeslider.controls.rangemaxyear.max;

    timeslider.adjustDateRangeInputsForSelectedMonthAndYear();
    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangemaxmonth, "input", () => {
    timeslider.adjustDateRangeInputsForSelectedMonthAndYear();
    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangemaxday, "change", () => {
    if (
      parseInt(timeslider.controls.rangemaxday.value) <
      parseInt(timeslider.controls.rangemaxday.min)
    )
      timeslider.controls.rangemaxday.value =
        timeslider.controls.rangemaxday.min;
    else if (
      parseInt(timeslider.controls.rangemaxday.value) >
      parseInt(timeslider.controls.rangemaxday.max)
    )
      timeslider.controls.rangemaxday.value =
        timeslider.controls.rangemaxday.max;

    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.rangemaxcebce, "change", () => {
    timeslider.adjustDateRangeInputsForSelectedMonthAndYear();
    timeslider.setDateRangeFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.slider, "input", () => {
    timeslider.setDateFromSlider();
  });
  L.DomEvent.on(timeslider.controls.playbutton, "click", () => {
    timeslider.autoplayStart();
    timeslider.controls.pausebutton.focus();
  });
  L.DomEvent.on(timeslider.controls.playbutton, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.pausebutton, "click", () => {
    timeslider.autoplayPause();
    timeslider.controls.playbutton.focus();
  });
  L.DomEvent.on(timeslider.controls.pausebutton, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.playnext, "click", () => {
    timeslider.sliderForwardOneStep();
  });
  L.DomEvent.on(timeslider.controls.playnext, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.playprev, "click", () => {
    timeslider.sliderBackOneStep();
  });
  L.DomEvent.on(timeslider.controls.playprev, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.playreset, "click", () => {
    timeslider.setDate(timeslider.getRange()[0]);
  });
  L.DomEvent.on(timeslider.controls.playreset, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.autoplaysubmit, "click", () => {
    timeslider.setAutoplayFromPickers();
  });
  L.DomEvent.on(timeslider.controls.stepamount, "input", () => {
    timeslider.setAutoPlayFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.stepinterval, "input", () => {
    timeslider.setAutoPlayFormAsOutOfSync(true);
  });
  L.DomEvent.on(timeslider.controls.autoplaysubmit, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.expandcollapse, "click", () => {
    timeslider.controlToggle();
  });
  L.DomEvent.on(timeslider.controls.expandcollapse, "keydown", (event) => {
    if (event.key == "Enter" || event.key == "Space") event.target.click();
  });
  L.DomEvent.on(timeslider.controls.datepickeropen, "click", () => {
    timeslider.datepickerOpen();
  });
  L.DomEvent.on(timeslider.controls.datepickerclose, "click", () => {
    timeslider.datepickerClose();
  });
  L.DomEvent.on(timeslider.controls.datepickercancel, "click", () => {
    timeslider.controls.datepickerclose.click();
  });
  L.DomEvent.on(timeslider.controls.datepickersubmit, "click", () => {
    timeslider.datepickerSubmit();
  });
  L.DomEvent.on(timeslider.controls.datepickersubmit, "keydown", (event) => {
    if (event.key == "Escape") timeslider.controls.datepickerclose.click();
  });
  L.DomEvent.on(timeslider.controls.datepickermonth, "input", () => {
    timeslider.adjustDatePickerInputsForSelectedMonthAndYear();
  });
  L.DomEvent.on(timeslider.controls.datepickerday, "change", () => {
    if (
      parseInt(timeslider.controls.datepickerday.value) <
      parseInt(timeslider.controls.datepickerday.min)
    )
      timeslider.controls.datepickerday.value =
        timeslider.controls.datepickerday.min;
    else if (
      parseInt(timeslider.controls.datepickerday.value) >
      parseInt(timeslider.controls.datepickerday.max)
    )
      timeslider.controls.datepickerday.value =
        timeslider.controls.datepickerday.max;
  });
  L.DomEvent.on(timeslider.controls.datepickeryear, "change", () => {
    if (
      parseInt(timeslider.controls.datepickeryear.value) <
      parseInt(timeslider.controls.datepickeryear.min)
    )
      timeslider.controls.datepickeryear.value =
        timeslider.controls.datepickeryear.min;
    else if (
      parseInt(timeslider.controls.datepickeryear.value) >
      parseInt(timeslider.controls.datepickeryear.max)
    )
      timeslider.controls.datepickeryear.value =
        timeslider.controls.datepickeryear.max;

    timeslider.adjustDatePickerInputsForSelectedMonthAndYear();
  });
  L.DomEvent.on(timeslider.controls.datepickercebce, "change", () => {
    timeslider.adjustDatePickerInputsForSelectedMonthAndYear();
  });
}
