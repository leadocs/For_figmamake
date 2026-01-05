{
  "navbar": {
    "brand": "RunC AI",
    "menu": ["Modelverse", "Sandbox", "Solutions", "Docs"],
    "mobileMenu": ["Modelverse", "Sandbox", "Solutions", "Docs"],
    "login": "Log in",
    "getStarted": "Start Building"
  },
  "hero": {
    "tag": "Serverless AI Infrastructure",
    "titlePrefix": "Production-Ready",
    "titleSuffix": "AI Stack",
    "description": "专为开发者打造的 GPU 算力底座。无需繁琐配置，通过 Sandbox 获得 100% 隔离的云端开发环境，一键调用 Modelverse 验证过的 SOTA 模型。",
    "primaryButton": "Explore Modelverse",
    "secondaryButton": "Launch Sandbox",
    "benefits": [
      {
        "title": "MicroVM Isolation",
        "desc": "内核级安全隔离"
      },
      {
        "title": "Instant Cold Start",
        "desc": "<50ms 极速启动"
      }
    ]
  },
  "heroIDE": {
    "tabs": {
      "sdk": "inference.py",
      "terminal": "Terminal"
    },
    "branch": "main",
    "code": {
      "comment1": "# Initialize isolated sandbox environment",
      "comment2": "# Automatic GPU provisioning (H100/A100)",
      "string1": "us-west-1",
      "string2": "deepseek-v3-pro",
      "string3": "Production"
    },
    "output": {
      "initializing": "$ runc sandbox init --gpu=h100",
      "systemAllocated": "✔ MicroVM initialized in 48ms",
      "modelLoaded": "✔ Model weights mapped (Zero-Copy)",
      "aiPrefix": "System:",
      "aiResponse": "Sandbox ready. Secure tunnel established. Waiting for inference requests..."
    },
    "runSelection": "Execute",
    "status": {
      "ready": "Connected",
      "latency": "12ms latency"
    }
  },
  "modelRegistry": {
    "tag": "Modelverse",
    "titlePrefix": "Curated",
    "titleSuffix": "SOTA Models",
    "subtitle": "Engineering Verified · Serverless · 拒绝平庸，只收录经得起生产环境考验的精品模型",
    "features": [
      {
        "bold": "Strictly Vetted",
        "text": "，每一款上架模型均通过 30+ 项性能与安全基准测试。"
      },
      {
        "bold": "Zero Config",
        "text": "，标准 API 接口交付，从 Playground 到 Production 仅需一行代码。"
      }
    ],
    "ctaButton": "View Registry",
    "registryHeader": "Trending Models",
    "models": [
      {
        "org": "DeepSeek",
        "name": "DeepSeek-V3",
        "tags": ["Coding", "Reasoning"],
        "score": "SOTA"
      },
      {
        "org": "Alibaba",
        "name": "Qwen-Max",
        "tags": ["Multilingual", "Enterprise"],
        "score": "4.9"
      },
      {
        "org": "Mistral",
        "name": "Mistral Large",
        "tags": ["Low Latency", "General"],
        "score": "4.8"
      },
      {
        "org": "Meta",
        "name": "Llama 3 70B",
        "tags": ["Open Weight", "Fine-tune"],
        "score": "4.9"
      }
    ],
    "viewAllButton": "Explore All 500+ Models"
  },
  "sandboxArchitecture": {
    "tag": "Agent Sandbox",
    "titlePrefix": "Ephemeral",
    "titleSuffix": "Dev Environments",
    "subtitle": "MicroVM 技术驱动 · 像本地一样丝滑，像物理机一样强大",
    "tabs": [
      {
        "title": "MicroVM Isolation",
        "subtitle": "Kernel-level Security",
        "description": "基于 Firecracker 技术栈，提供独立内核级隔离。既有虚拟机的安全性，又有容器的轻量级。"
      },
      {
        "title": "Instant Scalability",
        "subtitle": "Scale to Zero",
        "description": "支持 Scale-to-Zero。闲置时自动休眠，调用时毫秒级唤醒，大幅降低 GPU 闲置成本。"
      },
      {
        "title": "Pre-configured Stack",
        "subtitle": "Dev Ready",
        "description": "预置 PyTorch, TensorFlow, CUDA 驱动。无需处理环境依赖地狱，专注于代码本身。"
      }
    ]
  },
  "platformAdvantages": {
    "tag": "Infrastructure",
    "titlePrefix": "Mission Critical",
    "titleSuffix": "Foundation",
    "subtitle": "为高算力需求构建的弹性底座",
    "cards": [
      {
        "title": "Enterprise Security",
        "items": [
          "SOC2 Type II Compliant",
          "VPC Peering 支持",
          "端到端数据加密"
        ]
      },
      {
        "title": "Developer Velocity",
        "items": [
          "CLI & SDK First 设计",
          "GitHub / GitLab 集成",
          "CI/CD 流水线支持"
        ]
      },
      {
        "title": "Global Edge",
        "items": [
          "全球多区域 GPU 调度",
          "自动择优低延迟节点",
          "Smart Routing 技术"
        ]
      }
    ]
  },
  "terminalCTA": {
    "title": "Ready to Ship?",
    "description": "加入数千名极客开发者的行列，开始构建下一代 AI 应用。",
    "primaryButton": "Start Building",
    "secondaryButton": "Contact Sales",
    "note": "$100 free credits for new accounts. No credit card required."
  },
  "footer": {
    "brand": "RunC AI",
    "description": "Empowering developers with next-gen AI infrastructure. Built for scale, designed for security.",
    "columns": [
      {
        "title": "Product",
        "links": ["Modelverse", "Sandbox", "Changelog"]
      },
      {
        "title": "Resources",
        "links": ["Documentation", "API Reference", "Status"]
      },
      {
        "title": "Company",
        "links": ["About", "Careers", "Contact"]
      }
    ],
    "copyright": "© 2024 RunC AI Inc. All rights reserved.",
    "legal": ["Privacy", "Terms"]
  }
}