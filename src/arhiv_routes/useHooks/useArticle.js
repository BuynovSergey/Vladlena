import React, { useMemo } from 'react';

function useSort(article, sort){
    const sortedArticle = useMemo(() => {
        if(sort){
            return [...article].sort((a,b) => a[sort].localeCompare(b[sort]));
        } else {
            return article;
        }
    }, [article, sort]);
    
    return sortedArticle;
}

function useSearch(article, sort, search){
    const sortedArticle = useSort(article, sort);

    const searchAndSort = useMemo(() => {
        return sortedArticle.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, sortedArticle]);

    return searchAndSort;
}

export default useSearch;