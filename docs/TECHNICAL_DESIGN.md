# NTE Studio Technical Design

## System Overview
NTE Studio is a TheoryCraft platform for NTE (異環).

## Core Systems
- Combat Engine (single source of truth)
- Database (JSON-based)
- Modules (Builder / Optimizer / Theory Lab)

## Data Flow
Database → Combat Engine → Modules → UI

## Version
v0.1 (initial setup)