// name --> name of radio group
// noa --> number of attempts

const disableRadioGroup = (name, noa) => {
    document.getElementsByName(name).forEach(element => element.disabled = true);
        
};

export default disableRadioGroup;