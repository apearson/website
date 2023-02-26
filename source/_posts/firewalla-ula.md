---
title: Firewalla IPv6 ULA
date: 12/20/2022
---

## TLDR

To make the Firewalla advertise a ULA address space to the network, run the following command (replace fd00::1 and br0):

Temporary Solution:
`sudo ip -6 addr add fd00::1/64 dev br0`

## Why this works

coming soon...