const btnSubmit = document.querySelector("#btn-submit");

function validateForm() {
  let number = document.forms["myForm"]["number"].value;
  if (number == "") {
    Swal.fire({
      title: "خطا!",
      text: "شماره تماس خود را وارد کنید",
      icon: "error",
      confirmButtonText: "باشه!",
    });
    return false;
  } else {
    Swal.fire({
      title: "تایید",
      text: "شماره شما با موفقیت ثبت شد",
      icon: "success",
      confirmButtonText: "فدات!",
     
    });
    return true;
  }
}
