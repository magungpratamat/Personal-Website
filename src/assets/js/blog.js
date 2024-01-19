const blogs = [];

function addBlog(e) {
  e.preventDefault();

  const projectName = document.getElementById("input-project-name").value;
  const description = document.getElementById("description").value;
  let image = document.getElementById("input-blog-image").files;
  const nodejs = document.getElementById("nodejs").checked;
  const python = document.getElementById("python").checked;
  const php = document.getElementById("php").checked;
  const golang = document.getElementById("golang").checked;
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const startDate = new Date(startInput.value);
  const endDate = new Date(endInput.value);

  image = URL.createObjectURL(image[0]);

  const blog = {
    projectName,
    description,
    image,
    nodejs,
    python,
    php,
    golang,
    createdAt: startDate,
    endDate,
  };

  blogs.unshift(blog);
  renderBlog();

  console.log("blogs", blogs);
}

function renderBlog() {
  let html = "";

  for (let index = 0; index < blogs.length; index++) {
    let renderTechIcons = "";

    if (blogs[index].nodejs) {
      renderTechIcons += `<i class="fa-brands fa-node"></i><span style="margin-right: 10px;"></span>`;
    }

    if (blogs[index].python) {
      renderTechIcons += `<i class="fa-brands fa-python"></i><span style="margin-right: 10px;"></span>`;
    }

    if (blogs[index].php) {
      renderTechIcons += `<i class="fa-brands fa-php"></i><span style="margin-right: 10px;"></span>`;
    }

    if (blogs[index].golang) {
      renderTechIcons += `<i class="fa-brands fa-golang"></i><span style="margin-right: 10px;"></span>`;
    }

    html += `
    <div class="card">
      <div class="container-img">
        <img src="${blogs[index].image}" alt="Programming" />
      </div>
      <div class="card-content">
        <div class="container-content">
          <a href="blog-detail.html" target="_blank">${
            blogs[index].projectName
          }</a>
          <p>${calculateDuration(
            blogs[index].createdAt,
            blogs[index].endDate
          )}</p>
          <div class="description"> 
            <p>${blogs[index].description}</p>
            ${renderTechIcons}
          </div>
          <div class="gabung-submit">
            <div class="submit-project">
              <button>Edit</button>
            </div>
            <div class="submit-project">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  document.querySelector(".blog-cards").innerHTML = html;
}

function calculateDuration(createdAt, endDate) {
  // Hitung durasi dalam milidetik
  const duration = endDate - createdAt;

  // Ubah durasi ke dalam detik, menit, jam, dan hari
  const seconds = Math.floor(duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Assuming a month has 30 days
  const years = Math.floor(months / 12); // Assuming a year has 12 months

  // Tampilkan hasil
  let resultDuration = "";

  if (years > 0) {
    resultDuration += years + (years === 1 ? " year" : " years");
  } else if (months > 0) {
    resultDuration += months + (months === 1 ? " month" : " months");
  } else if (days > 0) {
    resultDuration += days + (days === 1 ? " day" : " days");
  } else if (hours > 0) {
    resultDuration += hours + (hours === 1 ? " hour" : " hours");
  } else if (minutes > 0) {
    resultDuration += minutes + (minutes === 1 ? " minute" : " minutes");
  } else {
    resultDuration += seconds + (seconds === 1 ? " second" : " seconds");
  }

  return resultDuration;
}

// renderBlog();

// Uncomment the following lines if you want to periodically update the blogs
// setInterval(() => {
//   renderBlog();
// }, 1000);
module.exports = { calculateDuration };
