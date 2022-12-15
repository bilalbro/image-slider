# Simple Image Slider

A very minimal image slider, built using React.

## Motivation
For a long time learning React now, I finally decided to build something more complex in it than those mere counter programs that, although are really good for beginners trying to understand how react works and get started with it, don't really serve as good examples to build one's skills in React.

Already having a great amount of experience building image sliders of many kinds in vanilla JS under my belt, I thought of building an image slider using React. It's not *that simple* and even not *that complicated* — just perfect for what I wanted to build at this time. 🙂

## The `Slider` component
To add a slider, we just need to include the **`Slider`** component along with its **`data`** prop, which holds an array of image URLs that will ultimately be shown in the slider, and its **`width`** and **`height`** props, which specify its width and height proportions, respectively:

```
<Slider data={[/* Array of URLs of images */]} width={1366} height={768} />
```

### Configurations
I've tried to keep the slider as much flexible as I could've, so that it could easily be configured for one's needs. The following props can be used to customize it:

- **`pagination`**: A Boolean value specifying whether pagination should be applied to the slider or not. By default, it's `false`.
- **`initial`**: Specifies the index of the slide which should be shown initially. By default, it's `0`, i.e. the very first slide.
- **`repeat`**: A Boolean value specifying whether the slides should repeat when we reach the very first or the very last slide. By default, it's `false`.
- **`keyHandling`**: A Boolean value specifying whether key-based navigation should be enabled. This allows us to navigate the slider by using the arrow keys on the keyboard. By default, it's `false` as well.
