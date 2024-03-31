# Bot Interaction Log

Each numbered entry below is a round with the AI.

1. Asked AI to generate React Application for the periodic table. Asked for a Table with elements that when clicked will provide a popup.
    - Bot instructed the user to use `npx create-react-app periodic-table`
    - Bot provided the Table, Element and Popup Components as a single file.
    - Bot provided the first 2 elements as data in the same single file.
    - Human copied output into the correct folder structure.

2. Asked AI to separate Table, Element, and Popup Components, as well as Move the Data into a JSON file and provide the remaining elements.
    - Bot moved Periodic Elements to JSON file and provided remaining elements.
    - Bot moved components to their files.
    - Human copied output into the correct folder structure.

3. Asked AI to Update JSON to add a symbol for each element from the description field.
    - Bot updated JSON to include a symbol for each element.
    - Human copied output into the correct folder structure.

4. Asked AI to remove the "close" button and make it so clicking outside of the popup closes the popup instead.
    - Bot updated the Popup component accordingly.
    - Human copied output into the correct folder structure.

5. Asked AI to add an overlay to the Popup Background.
    - Bot updated the Popup component accordingly.
    - Human copied output into the correct folder structure.

6. Asked AI to update the Element component to add a symbol to the element above the name.
    - Bot updated the Element component accordingly.
    - Human copied output into the correct folder structure.

7. Asked AI to add the Element component to the Popup component so that the Element is shown to the left of the current content in the popup.
    - Bot updated the Popup component accordingly.
    - Human copied output into the correct folder structure.

8. Asked AI to update the styling of the Element so that it is square.
    - Bot updated the Element component accordingly.
    - Human copied output into the correct folder structure.
    - Human removed line-height due to visual issue

9. Asked AI to update the styling of the Popup so that the element inside it is square.
    - Bot failed to provide the correct code after 3 interactions.
    - Human added a new div to wrap Element and set the div's width statically.