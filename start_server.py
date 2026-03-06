#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import threading
import time

PORT = 8888


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)


def start_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"服务器启动在 http://localhost:{PORT}")
        print("按 Ctrl+C 停止服务器")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n服务器已停止")
            httpd.shutdown()


if __name__ == "__main__":
    # 在后台打开浏览器
    def open_browser():
        time.sleep(1)
        webbrowser.open(f"http://localhost:{PORT}")

    browser_thread = threading.Thread(target=open_browser)
    browser_thread.daemon = True
    browser_thread.start()

    start_server()
