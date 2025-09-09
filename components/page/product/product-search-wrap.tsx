import { Button, Form, Input } from "@heroui/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function ProductSearchWrap() {
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
    };
    return (
        <Form onSubmit={handleSearch} className="mb-12 max-w-2xl mx-auto">
            <div className="flex">
                <Input
                    label=""
                    aria-label="keyword input"
                    name="keyword"
                    size="lg"
                    radius="full"
                    placeholder="Please enter keywords!"
                    startContent={<AiOutlineSearch size={30} />}
                />
                <Button size="lg" radius="full" startContent={<AiOutlineSearch size={16} />}>Search</Button>
            </div>
        </Form>
    );
}