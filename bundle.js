document.getElementById("home").getElementsByTagName("h2")[0].innerHTML =
  MY_DETAILS.NAME.first +
  " " +
  MY_DETAILS.NAME.family +
  " (" +
  MY_DETAILS.age +
  ")";

document.getElementById("home").getElementsByTagName("h2")[1].innerHTML =
  MY_DETAILS.profession;

document
  .getElementById("footerNameMark")
  .insertAdjacentText(
    "beforeend",
    MY_DETAILS.NAME.first + " " + MY_DETAILS.NAME.family
  );

document
  .getElementById("contactName")
  .insertAdjacentText(
    "beforeend",
    MY_DETAILS.NAME.first + " " + MY_DETAILS.NAME.family
  );

document
  .getElementById("contactAddress")
  .insertAdjacentText(
    "beforeend",
    MY_DETAILS.ADDRESS.street +
      ", " +
      MY_DETAILS.ADDRESS.town +
      ", " +
      MY_DETAILS.ADDRESS.postcode
  );

document
  .getElementById("contactPhoneNumber")
  .insertAdjacentText("beforeend", MY_DETAILS.phoneNumber);

document
  .getElementById("contactEmail")
  .insertAdjacentText("beforeend", MY_DETAILS.email);
