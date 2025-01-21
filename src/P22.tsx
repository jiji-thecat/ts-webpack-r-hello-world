/**Question:

Implement a React component that renders a dymamic and expandable side-menu-like list of items.

1. The outermost tag of the component is a div with a class of menu-wrapper.
Initially it will contain nothing, and your task is to create the code that will display the side menu there.

2. The component will receive a property named menuconfig which will contain the configuration of the side menu data:

const menuConfig = [
{
  title: 'Home',
},
{
  title: 'Services',
  subItems: ['Cooking', 'Cleaning'],
},
{
  title: 'Contact',
  subItems: ['Phone', 'Mail'],
}
];

3. Every menu item should be displayed inside a separate corresponding div.
This div should have dynamically created attribute, data-test-id, in the form: first-level-[lowercase-title-name-here].
So, for example if some Menultem contained a title named Home, the div should have a data-test-id containing fsrst-1evel-home.

4. Every div from the previous point should contain within it:
- title. For example, for a Menultem with the tille Home, the text Home should appear in this div.
- button with a dynamic: data-test-id in the form: button-{lowercase-title-name-here} (for example button-home). The button should only be displayed when there are subItems for the given menu item.
when clicking the button, the submenu with subitems (ul list described in next point) should appear (be added to the DOM ) if it is hidden, and should disappear (be removed from the DOM) if it is expanded.
The text inside the button should be expanded when the given menu is not expanded, and Hide if the menu has already been expanded.
- ul list. The ul tag should have a data-test-id in the form: ul-{lowercase-title-name-here}, so if we had a list for the Home title, the data-test-id should be ul-home.
- li tags inside the aforementioned ul tag. Each li should have a data-test-id in the form: li-{lowercase-title-name-here}-{lowercase-subitem-name-here}. So, for example for the Home title and the subItems Main and Services, the li data-test-ids should be li-home-main and li-home-services. Inside every li tag there should be a subitem name (taken from the array subItems from the corresponding menuItem). The display state of these submenu lists is controlled by the aforementioned corresponding buttons. and the new one should appear.

5. Only one submenu should be in the expanded state at any time. If one of the submenus is open and then some other menu item button is clicked, the previously expanded submenu should be hidden and the new one should appear.

6. If no subitems are available for some MenuItem (undefined subItems property for MenuItems or an empty array), then no ul list should be available, and also no Expand button should be available.

7. Tests will follow elements by their data-test-1d, so invisible elements should not be rendered. Do not control elements' visibility using CSS properties.

Assumptions
- Design/styling is not assessed and will not affect your score. You should focus only on implementing the requirements.
- Setting proper ids for the elements is crucial, as it will be used later, in the automated assessment of the task.
- Initially no subItems should be visible in other words no menu item should be expanded when it contains sone subItems (there should be no ul in the DOM).
- Every title in menuconfig will be unique, so you do not have to worry about duplicate IDs in the code.
- No title or potential subtitle can have an empty value.
- Every title and subtitle contains only letters and consists of just one word.
- You can use console. log for debugging purposes via your browser's developer tools.
- Only imports from the reace module are allowed.

Environment - React v. 17.0.1

Example Use the animation below as a reference for your solution (take into account that the Home iterm does not have any corresponding subltems).
 */
/**
 * summary
 *  create a button and expand menu when press it.
 *  each menu should be dinaymic and rapped with <div>
 *  ex. data-test-first-level-home
 *  only one menu can be expanded
 *  do not show button when there is no submenu
 *
 * solution
 *  - set menuConfig with setState
 *    - also hold isVisible: false
 *  - update the data when button is pressed isVisible: true
 */
import React, { useState, useEffect, useCallback } from 'react';

const CustomComponent = ({
  v,
  i,
  onClickSubItems,
}: {
  v: any;
  i: number;
  onClickSubItems: (id: string, isExpand: boolean) => void;
}) => {
  const { title, subItems, isVisible, toplevelId } = v;
  const buttonId = `button-${title.toLowerCase()}`;

  const onClick = useCallback(() => {
    onClickSubItems(toplevelId, !isVisible);
  }, [isVisible, onClickSubItems, toplevelId]);

  return (
    <div key={i} data-test-id={toplevelId}>
      <div key={i}>{title}</div>
      {subItems && (
        <>
          <button key={i} data-test-id={buttonId} onClick={onClick}>
            {isVisible ? 'Hide' : 'Expand'}
          </button>
          {subItems.map((subV: any, subI: any) => {
            const liId = `li-${title.toLowerCase()}-${subV}`;
            const ulId = `ul-${title.toLowerCase()}`;

            return isVisible ? (
              <ul key={subI} data-test-id={ulId}>
                <li key={subI} data-test-id={liId}>
                  {subV}
                </li>
              </ul>
            ) : (
              <></>
            );
          })}
        </>
      )}
    </div>
  );
};

function Solution({ menuConfig }: { menuConfig: any }) {
  const [data, setData] = useState<any>([]);

  const onClickSubItems = useCallback((id: string, isExpand = true) => {
    setData((prev: any) => {
      return prev.map((v: any) => {
        const obj = { ...v };

        if (isExpand) {
          v.toplevelId === id ? (obj.isVisible = true) : (obj.isVisible = false);
        } else {
          obj.isVisible = false;
        }

        return obj;
      });
    });
  }, []);

  useEffect(() => {
    if (menuConfig) {
      const temp = menuConfig.map((v: any) => {
        return { ...v, isVisible: false, toplevelId: `first-level-${v.title.toLowerCase()}` };
      });

      setData(temp);
    }
  }, [menuConfig]);

  return (
    <div className="menu-wrapper">
      {data.length > 0
        ? data.map((v: any, i: any) => {
            return <CustomComponent v={v} key={i} i={i} onClickSubItems={onClickSubItems} />;
          })
        : ''}
    </div>
  );
}

export default Solution;
