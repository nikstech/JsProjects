let myForm = document.querySelector("#myForm");
let imgInput = document.querySelector(".img");
let file = document.querySelector("#imgInput");
let name = document.querySelector("#name");
let age = document.querySelector("#age");
let city = document.querySelector("#city");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let post = document.querySelector("#post");
let submitBtn = document.querySelector(".submit");
let userDetails = localStorage.getItem("userInfo");
let data = document.querySelector("#data");
let newUserInfo;
let editId = null;
let modal = document.querySelector(".modal");
let modalTitle = document.querySelector(".modal-title");
let submit = document.querySelector(".submit");
modalTitle = modalTitle.innerText;
submit = submit.innerText;
newUserInfo = userDetails || null || undefined ? JSON.parse(userDetails) : [];
// take imhs
file.addEventListener("change", (e) => {
  if (file.files[0].size < 1000000) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      imgUrl = e.target.result;
      imgInput.src = imgUrl;
    };
    fileReader.readAsDataURL(file.files[0]);
  } else {
    alert("This file is too large!");
  }
});

myForm.addEventListener("submit", (e) => {
  submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
  e.preventDefault();
  const userInfo = {
    picture: imgInput.src,
    name: name.value,
    age: age.value,
    city: city.value,
    email: email.value,
    phone: phone.value,
    post: post.value,
  };

  if (editId != null) {
    newUserInfo.splice(editId, 1, userInfo);
    editId = null;
    modalTitle.innerText = modalTitle;
    submit.innerText = submit;
  } else {
    newUserInfo.push(userInfo);
  }

  localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  showUserInfo();
  clearAll();
  // modal.style.display = 'none'
});

const showUserInfo = () => {
  let createTr = "";
  let newUserInfo = localStorage.getItem("userInfo");
  data.innerHTML = "";
  newUserInfo = JSON.parse(newUserInfo);
  if (newUserInfo != null) {
    newUserInfo.forEach((ele, id) => {
      createTr = `<tr>
      <td>${id + 1}</td>
      <td><img src=${ele.picture} alt="" width="50" height="50"></td>
      <td>${ele.name}</td>
      <td>${ele.age}</td>
      <td>${ele.city}</td>
      <td>${ele.email}</td>
      <td>${ele.phone}</td>
      <td>${ele.post}</td>
      <td>
          <button class="btn btn-success" onclick="readInfo('${
            ele.picture
          }', '${ele.name}', '${ele.age}', '${ele.city}', '${ele.email}', '${
        ele.phone
      }', '${
        ele.post
      }')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i>
          </button>
          <button class="btn btn-primary" onclick="editInfo('${id}', '${
        ele.picture
      }', '${ele.name}', '${ele.age}', '${ele.city}', '${ele.email}', '${
        ele.phone
      }', '${
        ele.post
      }')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>
          <button class="btn btn-danger"><i class="bi bi-trash" onclick='deleteRow(${id})'></i></button>
      </td>
    </tr>`;
      data.innerHTML += createTr;
    });
  }
};
showUserInfo();
// Clearing all Inputs
const clearAll = () => {
  (imgInput.src = "./image/Profile Icon.webp"),
    (name.value = ""),
    (age.value = ""),
    (city.value = ""),
    (email.value = ""),
    (phone.value = ""),
    (post.value = "");
};
const deleteRow = (id) => {
  newUserInfo.splice(id, 1);
  localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  showUserInfo();
};
// readInfo
const readInfo = (pic, name, age, city, email, phone, post) => {
  document.querySelector(".showImg").src = pic;
  document.querySelector("#showName").value = name;
  document.querySelector("#showAge").value = age;
  document.querySelector("#showCity").value = city;
  document.querySelector("#showEmail").value = email;
  document.querySelector("#showPhone").value = phone;
  document.querySelector("#showPost").value = post;
};

// editInfo
const editInfo = (Index, Pic, Name, Age, City, Email, Phone, Post) => {
  (editId = Index),
    (imgInput.src = Pic),
    (name.value = Name),
    (age.value = Age),
    (city.value = City),
    (email.value = Email),
    (phone.value = Phone),
    (post.value = Post);
    modalTitle.innerText = "Update the Form";
    submit.innerText = "Update";
};
