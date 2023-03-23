let color = "#000";
let color_value = 0;
let rotate_val = 0;
let zoom_val = 3;
let zoom_in = false;
let element_box,
  element_sphere,
  element_cylinder,
  element_camera,
  element_scene;
window.onload = function () {
  element_box = document.querySelector(".my_box");
  element_sphere = document.querySelector(".my_sphere");
  element_cylinder = document.querySelector(".my_cylinder");
  element_camera = document.querySelector(".my_camera");
  element_scene = document.querySelector(".my_scene");
  element_sphere.setAttribute("radius", "2.5");
  //add image of polsl
  element_scene.insertAdjacentHTML(
    "afterbegin",
    `<a-image src="index/polsl.png" rotate="speed: 1" ></a-image>`
  );
};
setInterval(function () {
  //color change
  if (color_value === 15) {
    color = "#000";
    color_value = 0;
  } else {
    color_value += 1;
    color =
      "#" +
      color_value.toString(16) +
      color_value.toString(16) +
      color_value.toString(16);
  }

  //rotation change
  if (rotate_val === 360) rotate_val = 0;
  else {
    rotate_val += 5;
  }

  //camera change
  if (zoom_val >= 3) zoom_in = true;
  if (zoom_val <= 0) zoom_in = false;
  if (zoom_in) {
    zoom_val -= 0.1;
  } else {
    zoom_val += 0.1;
  }
  element_camera.setAttribute("position", "0 1.6 " + zoom_val);
  element_cylinder.setAttribute("rotation", "0 0 " + rotate_val);
  element_box.setAttribute("color", color);
}, 500);
