gsap.to(".logo", {durartion: 1.5 , x: "400%", y: 500 , backgroundColor: "red", borderRadius: "20%", border: "5px solid white", ease: "steps (12)"});

// ここが変わらないのがわからない。速さとか。動きとか
// gsap.to("h2.title", {duration: 1, x: "400%", opacity: 0.3, ease: "steps (12)"});
// gsap.to(".box", {duration: 2, x: 300});
// gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});

gsap.from(".box", {
  duration: 1,
  scale: 0.1,
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: [7,15],
    from: "end",
    amount: 1.5
  }
});