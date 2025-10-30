## DOM Navigation

- parentElement: Chọn phần tử cha phần tử hiện tại (1 cấp trên)
- children: Chọn danh sách phần tử con gần nhất từ phần tử đã có
- nextElementSibling: Chọn phần tử kế tiếp phần tử đã có
- previousElementSibling: Chọn phần tử phía trước phần đã có (lùi lại)

## DOM Node

1. createElement
   //code: const h1 = document.createElement("h1);

2. append --> Thêm phần tử vào cây DOM

3. prepend --> trèn nhiều phần tử cùng 1 lúc vào cây DOM

4. insertBefore --> Dùng để chèn 1 node con mới vào trước 1 node con cụ thể khác cùng cha
   --> syntax: parentNode.insertBefore(newNode, referenceNode);

5. replaceChild --> Dùng để thay thế con trong parentNode

6. removeChild --> Xoá con

7. textNode --> Dùng để thao tác với văn bản bên trong Node
   --> syntax: document.createTextNode(data) --> Ta có tự do tuỳ chính biến node kể cả khi nó đã nằm bên trong phần tử mà không cần gọi lại
