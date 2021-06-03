import { Input, FilterGroupItem, FilterBar, DateRangePicker } from '@ui5/webcomponents-react';
import { useEffect, useState } from 'react';

export const WellFilterBar = () => {
    const [metaData, setMetaData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(json => {setMetaData(json)});
    }, []);

    const getFilterItemByType = (fieldMeta, index) => {
        const fieldType = fieldMeta.type;
        switch(fieldType){
            case "input":
                return <FilterGroupItem
                                label={fieldMeta.title}
                                key={index}
                                considerGroupName
                                visibleInFilterBar
                        >
                        <Input placeholder={fieldMeta.placeHolder} />
                        </FilterGroupItem>;
                
            case "datePicker":
                return <FilterGroupItem
                        label={fieldMeta.title}
                        key={index}
                    >
                        <DateRangePicker
                            style={{
                                minWidth: 'auto'
                            }}
                        />
                    </FilterGroupItem>

            default:
                break;
        }
    }
    return(
        <>
        <FilterBar        
                considerGroupName
                showFilterConfiguration
                showSearchOnFiltersDialog
                >
            {metaData.map((fieldMeta, index) => {
                return getFilterItemByType(fieldMeta, index)

            })}
        </FilterBar>
        </>
    )
}