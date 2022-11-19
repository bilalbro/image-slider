export function elementMatches(target, element) {
   while (target !== document) {
      if (target === element) {
         return true;
      }
      target = target.parentNode;
   }
   return false;
}

export function repeatTheCycle(newIndex, slideCount) {
   if (newIndex < 0) {
      newIndex = slideCount - 1;
   }
   else if (newIndex >= slideCount) {
      newIndex = 0;
   }
   return newIndex;
}

export function breakTheFlow(newIndex, slideCount) {
   if (newIndex < 0) {
      newIndex = 0;
   }
   else if (newIndex >= slideCount) {
      newIndex = slideCount - 1;
   }
   return newIndex;
}