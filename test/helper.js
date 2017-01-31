const checkSelection = (element, selected) => {
  const {width, height} = element.getBoundingClientRect();
  if (element == selected) {
    expect(width).to.be.above(0);
    expect(height).to.be.above(0);
  } else {
    expect(width).to.equal(0);
    expect(height).to.equal(0);
  }
}
