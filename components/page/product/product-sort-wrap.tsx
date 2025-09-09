'use client'

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineProfile } from "react-icons/ai";

interface SortData {
    id: string,
    sort: SortDirection,
    active: boolean,
}
const sortData: Array<SortData> = [
    {
        id: 'createTime',
        sort: 'DESC',
        active: true
    }, {
        id: 'proName',
        sort: 'DESC',
        active: false,
    }, {
        id: 'sortBy',
        sort: 'DESC',
        active: false
    }
]
export default function ProductSortWrap({
    sortBy,
    sort
}: Readonly<{
    sortBy: string,
    sort: SortDirection
}>) {
    const t = useTranslations('Website.Page.Prodducts')
    const [sortField, setSortField] = useState(sortBy);
    //const [direction, setDirection] = useState(sort);
    const [data, setData] = useState<Array<SortData>>([...sortData]);
    const router = useRouter();

    const onSortClick = useCallback((item: SortData) => {
        const url = `/product?sortBy=${item.id}&sort=${item.sort === 'ASC' ? 'DESC' : 'ASC'}`;
        router.push(url);
    }, [router])

    useEffect(() => {
        if (sortField != sortBy) {
            setSortField(sortBy);
            setData(pre => pre.map(item => {
                const newRec = { ...item }
                if (newRec.id === sortBy) {
                    newRec.active = true;
                } else {
                    newRec.active = false;
                }
                return newRec;
            }))
        }
        //setDirection(sort)
        setData(pre => pre.map(item => {
            const newRec = { ...item }
            if (newRec.id === sortBy) {
                newRec.sort = sort;
            }
            return newRec;
        }))
    }, [sort, sortBy, sortField])

    return (
        <div className="w-full flex justify-start items-center gap-3 pb-3">
            <div>
                <AiOutlineProfile size={16} />
            </div>
            {
                data.map(item => <div key={item.id} className="flex items-center cursor-pointer hover:opacity-80" onClick={() => onSortClick(item)}>
                    <span className={clsx('text-xs', item.active ? 'text-red-500' : '')}>{t(`sort.${item.id}`)}</span>
                    {
                        item.sort === 'ASC' ? <span className={item.active ? 'text-red-500' : ''}><AiOutlineCaretUp /></span> : <span className={item.active ? 'text-red-500' : ''}><AiOutlineCaretDown /></span>
                    }
                </div>)
            }
        </div>
    );
}