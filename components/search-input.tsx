'use client'

import { useCallback, useState } from "react";
import {
    SearchIcon,
} from "@/components/icons";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Toast } from "@/utils/toast";
export default function SearchInput() {
    const [keyword, setKeyword] = useState('');
    const router = useRouter();
    const onSearchHandle = useCallback(()=>{
        if(!keyword || keyword.length === 0){
            Toast('Please enter the keywords!', 'error');
            return;
        }
        router.push('/product/search?keyword=' + keyword)
    },[keyword])
    return (
        <Input
            aria-label="Search"
            name="keyword"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Button size="sm" radius="md" isIconOnly onPress={()=>onSearchHandle()}><AiOutlineSearch size={16} /></Button>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
            onValueChange={setKeyword}
        />
    )
}