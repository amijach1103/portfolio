---
title: "Running an Advisory Council of One"
description: "When you're the only PM on a project, you have to manufacture the rigor that a larger team provides naturally. Here's how I use AI agents as structured perspectives to stress-test my own decisions."
pubDate: "Mar 10 2026"
tags: ["experiments"]
---

I'm the sole PM on a discovery project. No product team to debate with. No design review. No engineering pushback. That sounds efficient until you realize those friction points are where bad ideas get caught.

So I built my own friction using AI agents.

## The setup

I created four AI agents, each with a distinct perspective and set of instructions:

- **User Researcher** — challenges assumptions about what users actually said vs. what I want them to have said. Asks things like: "What's the exact quote that supports this claim?" and "Could this be politeness rather than genuine interest?"
- **Product Strategist** — pressure-tests the business case and competitive positioning. Pushes on: "What's your defensibility here?" and "If a competitor launched this tomorrow, would your users care?"
- **Critical Friend** — asks the uncomfortable questions I'm avoiding. The one that says: "You skipped over the scenario where the data is ambiguous. What's the plan then?" and "You're optimizing for speed. What are you sacrificing?"
- **Stakeholder Simulator** — models how a specific senior leader would react to what I'm proposing. Trained on that person's known priorities, communication style, and past feedback. Asks: "Why should I fund another sprint of this?" and "Where's the business case?"

Each agent has a system prompt that defines its role, its priorities, and what it should push back on. They don't tell me what to do. They ask the questions that the role would ask. The decisions stay with me.

## How I run a session

I bring a specific artifact to the council: a framework, a deck, a set of talking points, a decision I'm about to make. Then I run it through each lens, one at a time. The format is simple:

1. Share the artifact with the agent
2. Ask: "What concerns would you raise about this?"
3. Let it push back
4. Decide what to address and what to accept as a known risk

A full session takes about 30 minutes. I usually run one before any high-stakes stakeholder conversation.

## What this actually caught

Before presenting an outcomes framework to leadership, I ran it through all four agents. The session surfaced six concerns I hadn't considered:

- Success criteria that were too easy to hit (Strategist)
- Interview data that could be explained by politeness rather than genuine interest (Researcher)
- A missing scenario for what happens when results are ambiguous (Critical Friend)
- A framing that would trigger skepticism from a specific stakeholder (Simulator)

I addressed all six before the real conversation. The framework was stronger. The meeting was smoother. And I didn't waste a senior leader's time debugging problems I could have caught myself.

## A counterintuitive call

When deciding whether to share a product demo with a stakeholder, the advisory council was unanimous: don't show it yet. The demo was built to close a decision, not to open a conversation. Showing it too early would anchor the discussion on execution details instead of the data that should drive the go/no-go call.

My instinct was to lead with the most impressive artifact. All four agents, from completely different angles, caught the timing mistake. The Strategist said it would shift the conversation from "should we" to "how should we" too early. The Simulator said the stakeholder would fixate on UI details. The Researcher said it would bias any subsequent user feedback. The Critical Friend just asked: "What's the best outcome of showing this now, and is it better than waiting two weeks?"

I waited. It was the right call.

## Why this works

The value isn't just in the AI. It's in the structure. Each agent has a defined role and a reason to disagree with me. That's the key. When I think through a problem alone, I tend to build the case for my preferred answer. The agents don't have a preferred answer. They have a preferred set of questions.

A solo PM who only debates with themselves will always win the argument. The advisory council makes sure someone in the room disagrees.

## The limitation

These agents catch logical gaps, framing mistakes, and blind spots in my reasoning. They don't catch political dynamics, emotional reactions, or the thing a real user would say that I'd never think to simulate.

I still need real stakeholders, real users, and real teammates. The advisory council is a pre-flight check, not a replacement for the flight. But it means I show up to every important conversation having already survived the hard questions once.
