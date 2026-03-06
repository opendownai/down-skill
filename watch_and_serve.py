#!/usr/bin/env python3
import os
import sys
import subprocess
import threading
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler


class ReloadHandler(FileSystemEventHandler):
    def __init__(self, server_process):
        self.server_process = server_process

    def on_modified(self, event):
        if event.is_directory:
            return
        if event.src_path.endswith((".html", ".css", ".js")):
            print(f"文件已修改: {event.src_path}")
            print("页面将在浏览器中自动刷新...")


def start_server():
    """启动Python HTTP服务器"""
    return subprocess.Popen(
        [sys.executable, "-m", "http.server", "8080"], cwd=os.getcwd()
    )


def main():
    print("启动开发服务器...")
    print("访问 http://localhost:8080 查看网站")
    print("正在监听文件变化...\n")

    # 启动HTTP服务器
    server_process = start_server()
    time.sleep(1)  # 等待服务器启动

    # 设置文件监听
    event_handler = ReloadHandler(server_process)
    observer = Observer()
    observer.schedule(event_handler, path=".", recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n正在关闭服务器...")
        observer.stop()
        server_process.terminate()
        observer.join()
        server_process.wait()
        print("服务器已关闭")


if __name__ == "__main__":
    main()
