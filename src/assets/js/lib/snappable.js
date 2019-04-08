// eslint-disable-next-line import/no-unresolved
import {Swappable, Plugins} from '@shopify/draggable';

export default function Snappable() {
  const containerSelector = '.snappable';
  const containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  const swappable = new Swappable(containers, {
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true,
    },
    plugins: [Plugins.Snappable],
  });

  // --- Draggable events --- //
  swappable.on('drag:start', (evt) => {
    if (evt.originalSource.classList.contains('card--typeStripes')) {
      evt.cancel();
    }
  });

  return swappable;
}
