function myFunction() {
  let x = 10;
  if (true) {
    // Avoid redeclaring x, either modify existing x or use a different variable name.
    x = 20;
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 20
} 