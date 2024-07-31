import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const DynamicTable = ({columns,rows}) => {
    return (
        <Table aria-label="Example table with dynamic content" className="mt-[10px]" radius = "none">
            <TableHeader columns = {columns}>
                {(column) => <TableColumn  key={column.key} className="text-[16px]">{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
            </TableBody>
        </Table> 
    )
}


export default DynamicTable;
