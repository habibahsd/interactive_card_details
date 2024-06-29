const elem = (x) => {
  return document.querySelector(x);
};

var first_num = elem(".first_num"),
  card_name = elem(".card_name"),
  exp_date = elem(".exp_date"),
  cvc_number = elem(".cvc_number"),
  card_form = elem(".card_form"),
  holder_name_input = elem(".holder_name_input"),
  card_num_input = elem(".card_num_input"),
  month_input = elem(".month_input"),
  year_input = elem(".year_input"),
  cvc_num_input = elem(".cvc_num_input"),
  confirm_btn = elem(".confirm_btn"),
  complete_part = elem(".complete_part");

holder_name_input.onkeyup = () => {
  let val = holder_name_input.value;

  if (val != "") {
    if (val.length < 26) {
      card_name.innerText = val;
    }
  } else {
    card_name.innerText = "Jane Appleseed";
  }
};

card_num_input.onkeyup = (x) => {
  let val = card_num_input.value;

  if (val != "") {
    if (val.length <= 19) {
      if (
        x.key == 0 ||
        x.key == 1 ||
        x.key == 2 ||
        x.key == 3 ||
        x.key == 4 ||
        x.key == 5 ||
        x.key == 6 ||
        x.key == 7 ||
        x.key == 8 ||
        x.key == 9
      ) {
        first_num.innerText = val;
      } else {
        card_num_input.style.border = "1px solid  hsl(0, 100%, 66%)";
        elem(".card_err").innerText = "Wrong format, numbers only";
        elem(".card_err").style.display = "block";
      }
    }
  } else {
    first_num.innerText = "0000 0000 0000 0000";

    card_num_input.style.border = "1px solid blue";
    elem(".card_err").style.display = "none";
  }
};

month_input.onkeyup = () => {
  let val = month_input.value;

  if (val != "") {
    if (val.length < 3) {
      document.querySelector(".m").innerText = val;
    }
  } else {
    document.querySelector(".m").innerText = "00";
  }
};

year_input.onkeyup = () => {
  let val = year_input.value;

  if (val != "") {
    if (val.length < 3) {
      document.querySelector(".y").innerText = val;
    }
  } else {
    document.querySelector(".y").innerText = "00";
  }
};

cvc_num_input.onkeyup = () => {
  let val = cvc_num_input.value;

  if (val != "") {
    if (val.length < 4) {
      cvc_number.innerText = val;
    }
  } else {
    cvc_number.innerText = "000";
  }
};

card_form.onsubmit = (e) => {
  e.preventDefault();
};

confirm_btn.onclick = () => {
  if (
    holder_name_input.value != "" &&
    card_num_input.value != "" &&
    month_input.value != "" &&
    year_input.value != "" &&
    cvc_num_input.value != ""
  ) {
    card_form.style.display = "none";
    complete_part.style.display = "block";
  } else {
    if (holder_name_input.value == "") {
      elem(".holder_err").innerText = "Can't be blank";
      holder_name_input.style.border = "1px solid  hsl(0, 100%, 66%)";
    } else {
      elem(".holder_err").style.display = "none";
      holder_name_input.style.border = "1px solid hsl(270, 3%, 87%)";
    }

    if (card_num_input.value == "") {
      elem(".card_err").innerText = "Can't be blank";
      card_num_input.style.border = "1px solid  hsl(0, 100%, 66%)";
    } else {
      elem(".card_err").style.display = "none";
      card_num_input.style.border = "1px solid hsl(270, 3%, 87%)";
    }

    if (month_input.value == "" || year_input.value == "") {
      elem(".date_err").innerText = "Can't be blank";

      if (month_input.value == "") {
        month_input.style.border = "1px solid  hsl(0, 100%, 66%)";
      }

      if (year_input.value == "") {
        year_input.style.border = "1px solid  hsl(0, 100%, 66%)";
      }
    } else {
      elem(".date_err").style.display = "none";

      if (month_input.value != "") {
        month_input.style.border = "1px solid hsl(270, 3%, 87%)";
      }

      if (year_input.value != "") {
        year_input.style.border = "1px solid hsl(270, 3%, 87%)";
      }
    }

    if (cvc_num_input.value == "") {
      elem(".cvc_err").innerText = "Can't be blank";
      cvc_num_input.style.border = "1px solid  hsl(0, 100%, 66%)";
    } else {
      elem(".cvc_err").style.display = "none";
      cvc_num_input.style.border = "1px solid hsl(270, 3%, 87%)";
    }
  }
};

const Continue = () => {
  complete_part.style.display = "none";

  document.location.reload();
};
