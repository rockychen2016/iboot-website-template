'use client'

import { useCallback, useState } from "react";
import {
    SearchIcon,
} from "@/components/icons";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useAlertMessage } from "@/providers/alert-modal-provider";
import { showAlert } from "@/utils/alert-utils";
export default function SearchInput() {
    const t = useTranslations('Components.SearchInput')
    const [keyword, setKeyword] = useState('');
    const router = useRouter();
    const iAlert = useAlertMessage();
    const onSearchHandle = useCallback(() => {
        if (!keyword || keyword.length === 0) {
            showAlert(iAlert, t('input_error'), 'error');
            return;
        }
        router.push('/search?keyword=' + keyword)
    }, [keyword, t, iAlert, showAlert, router])
    return (
        <Input
            aria-label="Search"
            name="keyword"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Button size="sm" radius="md" isIconOnly onPress={() => onSearchHandle()}><AiOutlineSearch size={16} /></Button>
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