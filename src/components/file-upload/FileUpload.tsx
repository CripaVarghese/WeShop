import { InputGroup } from '@chakra-ui/react';
import React, { ReactNode, useRef } from 'react';

type FileUploadProps = {
    accept?: string;
    multiple?: boolean;
    children?: ReactNode;
    onChange: (e: FileList | null) => void;
};

const FileUpload = (props: FileUploadProps) => {
    const {  accept, multiple, children, onChange } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => inputRef.current?.click();

    return (
        <InputGroup
            onClick={handleClick}
            maxW={'fit-content'}
            alignItems={'center'}
            cursor={'pointer'}
            flexDir={{ base: 'column', md: 'row' }}
        >
            <input
                type={'file'}
                multiple={multiple || false}
                hidden
                accept={accept}
                onChange={(e) => onChange(e.target.files)}
            />
            <>{children}</>
        </InputGroup>
    );
};

export default FileUpload;
