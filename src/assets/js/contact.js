// function inputan dari form
function submitData(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const subject = document.getElementById("subject").value;
  const massage = document.getElementById("massage").value;

  // allert

  if (name == "") {
    return alert("nama harus diisi");
  } else if (email == "") {
    return alert("Email tidak boleh kosong");
  } else if (phoneNumber == "") {
    return alert("Nomor Handphone tidak boleh kosong");
  } else if (subject == "") {
    return alert("Subject belum dipilih");
  } else if (massage == "") {
    return alert("pesan masih kosong, silahkan isi pesannya");
  }
  console.log(name);
  console.log(email);
  console.log(phoneNumber);
  console.log(subject);
  console.log(massage);

  //   programmatical click
  let a = document.createElement("a");
  a.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(massage)}`;
  a.click();
}
